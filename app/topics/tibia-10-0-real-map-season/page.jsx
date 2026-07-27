import Tibia100RealMapSeasonKeywordPage, { generateMetadata } from './tibia-10-0-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RealMapSeasonKeywordPage />;
}
