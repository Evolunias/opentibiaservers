import SeasonalSeasonEuropeKeywordPage, { generateMetadata } from './seasonal-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonEuropeKeywordPage />;
}
