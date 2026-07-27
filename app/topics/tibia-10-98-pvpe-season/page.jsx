import Tibia1098PvpeSeasonKeywordPage, { generateMetadata } from './tibia-10-98-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpeSeasonKeywordPage />;
}
