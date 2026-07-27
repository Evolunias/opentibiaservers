import Tibia15RealMapStatusKeywordPage, { generateMetadata } from './tibia-15-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapStatusKeywordPage />;
}
