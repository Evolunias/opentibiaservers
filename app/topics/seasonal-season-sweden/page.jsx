import SeasonalSeasonSwedenKeywordPage, { generateMetadata } from './seasonal-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonSwedenKeywordPage />;
}
