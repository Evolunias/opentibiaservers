import Tibia76RealMapStatusKeywordPage, { generateMetadata } from './tibia-7-6-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapStatusKeywordPage />;
}
