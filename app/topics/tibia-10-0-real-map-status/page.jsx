import Tibia100RealMapStatusKeywordPage, { generateMetadata } from './tibia-10-0-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RealMapStatusKeywordPage />;
}
