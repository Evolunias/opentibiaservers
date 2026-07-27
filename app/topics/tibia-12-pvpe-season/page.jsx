import Tibia12PvpeSeasonKeywordPage, { generateMetadata } from './tibia-12-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeSeasonKeywordPage />;
}
