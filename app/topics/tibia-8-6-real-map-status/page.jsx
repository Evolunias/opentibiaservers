import Tibia86RealMapStatusKeywordPage, { generateMetadata } from './tibia-8-6-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapStatusKeywordPage />;
}
