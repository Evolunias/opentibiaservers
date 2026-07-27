import SeasonalSeasonNorthAmericaKeywordPage, { generateMetadata } from './seasonal-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonNorthAmericaKeywordPage />;
}
