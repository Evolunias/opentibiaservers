import Tibia15PvpeSeasonKeywordPage, { generateMetadata } from './tibia-15-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeSeasonKeywordPage />;
}
