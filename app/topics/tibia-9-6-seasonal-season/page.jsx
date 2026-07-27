import Tibia96SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalSeasonKeywordPage />;
}
