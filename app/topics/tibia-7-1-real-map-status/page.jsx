import Tibia71RealMapStatusKeywordPage, { generateMetadata } from './tibia-7-1-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RealMapStatusKeywordPage />;
}
