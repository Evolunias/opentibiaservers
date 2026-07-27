import Tibia84PvpeSeasonKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeSeasonKeywordPage />;
}
