import Tibia14PvpeSeasonKeywordPage, { generateMetadata } from './tibia-14-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeSeasonKeywordPage />;
}
