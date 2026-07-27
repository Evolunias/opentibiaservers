import Tibia1098RealMapSeasonKeywordPage, { generateMetadata } from './tibia-10-98-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RealMapSeasonKeywordPage />;
}
