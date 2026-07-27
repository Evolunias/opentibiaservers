import Tibia15SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-15-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalSeasonKeywordPage />;
}
