import Tibia11RealMapSeasonKeywordPage, { generateMetadata } from './tibia-11-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapSeasonKeywordPage />;
}
