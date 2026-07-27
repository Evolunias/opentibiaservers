import Oldera12SeasonalServerKeywordPage, { generateMetadata } from './oldera-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12SeasonalServerKeywordPage />;
}
