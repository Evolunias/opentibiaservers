import Tibia12RealMapStatusKeywordPage, { generateMetadata } from './tibia-12-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapStatusKeywordPage />;
}
