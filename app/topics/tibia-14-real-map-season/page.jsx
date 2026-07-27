import Tibia14RealMapSeasonKeywordPage, { generateMetadata } from './tibia-14-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapSeasonKeywordPage />;
}
