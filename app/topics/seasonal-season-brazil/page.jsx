import SeasonalSeasonBrazilKeywordPage, { generateMetadata } from './seasonal-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonBrazilKeywordPage />;
}
