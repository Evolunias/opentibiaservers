import Eldera81SeasonalServerKeywordPage, { generateMetadata } from './eldera-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera81SeasonalServerKeywordPage />;
}
