import Tibia81RealMapStatusKeywordPage, { generateMetadata } from './tibia-8-1-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RealMapStatusKeywordPage />;
}
