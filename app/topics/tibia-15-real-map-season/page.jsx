import Tibia15RealMapSeasonKeywordPage, { generateMetadata } from './tibia-15-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapSeasonKeywordPage />;
}
