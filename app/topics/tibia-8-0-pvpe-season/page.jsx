import Tibia80PvpeSeasonKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeSeasonKeywordPage />;
}
