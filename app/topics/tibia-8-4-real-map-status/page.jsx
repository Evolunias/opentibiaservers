import Tibia84RealMapStatusKeywordPage, { generateMetadata } from './tibia-8-4-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RealMapStatusKeywordPage />;
}
