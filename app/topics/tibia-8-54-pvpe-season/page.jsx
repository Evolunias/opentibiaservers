import Tibia854PvpeSeasonKeywordPage, { generateMetadata } from './tibia-8-54-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpeSeasonKeywordPage />;
}
