import SeasonalSeasonPolandKeywordPage, { generateMetadata } from './seasonal-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonPolandKeywordPage />;
}
