import Tibia772RealMapSeasonKeywordPage, { generateMetadata } from './tibia-7-72-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RealMapSeasonKeywordPage />;
}
