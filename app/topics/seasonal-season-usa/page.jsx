import SeasonalSeasonUsaKeywordPage, { generateMetadata } from './seasonal-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonUsaKeywordPage />;
}
