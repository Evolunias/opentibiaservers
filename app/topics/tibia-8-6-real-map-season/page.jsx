import Tibia86RealMapSeasonKeywordPage, { generateMetadata } from './tibia-8-6-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapSeasonKeywordPage />;
}
