import Eldera86SeasonalServerKeywordPage, { generateMetadata } from './eldera-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera86SeasonalServerKeywordPage />;
}
