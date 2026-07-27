import Tibia76PvpeSeasonKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeSeasonKeywordPage />;
}
