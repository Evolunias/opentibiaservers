import SeasonalSeasonFranceKeywordPage, { generateMetadata } from './seasonal-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonFranceKeywordPage />;
}
