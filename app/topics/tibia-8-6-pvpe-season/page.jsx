import Tibia86PvpeSeasonKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeSeasonKeywordPage />;
}
