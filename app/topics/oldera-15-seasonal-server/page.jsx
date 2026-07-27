import Oldera15SeasonalServerKeywordPage, { generateMetadata } from './oldera-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15SeasonalServerKeywordPage />;
}
