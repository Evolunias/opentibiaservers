import Tibia80SeasonalSeasonKeywordPage, { generateMetadata } from './tibia-8-0-seasonal-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80SeasonalSeasonKeywordPage />;
}
