import Tibia11PvpeSeasonKeywordPage, { generateMetadata } from './tibia-11-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeSeasonKeywordPage />;
}
