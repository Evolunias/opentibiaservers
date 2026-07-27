import Tibia13RealMapSeasonKeywordPage, { generateMetadata } from './tibia-13-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapSeasonKeywordPage />;
}
