import SeasonalSeasonMexicoKeywordPage, { generateMetadata } from './seasonal-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonMexicoKeywordPage />;
}
