import Tibia96PvpeSeasonKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeSeasonKeywordPage />;
}
