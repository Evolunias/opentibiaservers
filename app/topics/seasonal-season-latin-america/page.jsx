import SeasonalSeasonLatinAmericaKeywordPage, { generateMetadata } from './seasonal-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonLatinAmericaKeywordPage />;
}
