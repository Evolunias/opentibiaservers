import Oldera13SeasonalServerKeywordPage, { generateMetadata } from './oldera-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13SeasonalServerKeywordPage />;
}
