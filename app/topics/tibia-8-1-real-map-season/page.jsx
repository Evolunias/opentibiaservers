import Tibia81RealMapSeasonKeywordPage, { generateMetadata } from './tibia-8-1-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RealMapSeasonKeywordPage />;
}
