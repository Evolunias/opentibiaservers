import Tibia71RealMapSeasonKeywordPage, { generateMetadata } from './tibia-7-1-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RealMapSeasonKeywordPage />;
}
