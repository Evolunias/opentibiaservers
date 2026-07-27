import Tibia74RealMapSeasonKeywordPage, { generateMetadata } from './tibia-7-4-real-map-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RealMapSeasonKeywordPage />;
}
