import SeasonalSeasonGermanyKeywordPage, { generateMetadata } from './seasonal-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonGermanyKeywordPage />;
}
