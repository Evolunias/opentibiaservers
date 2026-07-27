import Tibia81PvpeSeasonKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeSeasonKeywordPage />;
}
