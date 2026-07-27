import Tibia76RealMapSeasonKeywordPage, { generateMetadata } from './tibia-7-6-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapSeasonKeywordPage />;
}
