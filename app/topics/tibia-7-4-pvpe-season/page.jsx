import Tibia74PvpeSeasonKeywordPage, { generateMetadata } from './tibia-7-4-pvpe-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpeSeasonKeywordPage />;
}
