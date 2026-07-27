import Tibia772PvpeSeasonKeywordPage, { generateMetadata } from './tibia-7-72-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpeSeasonKeywordPage />;
}
