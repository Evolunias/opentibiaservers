import SeasonalSeasonCanadaKeywordPage, { generateMetadata } from './seasonal-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalSeasonCanadaKeywordPage />;
}
