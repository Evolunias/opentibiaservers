import SeasonalSeasonArgentinaKeywordPage, { generateMetadata } from './seasonal-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonArgentinaKeywordPage />;
}
