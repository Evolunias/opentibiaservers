import Tibia1098RealMapStatusKeywordPage, { generateMetadata } from './tibia-10-98-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RealMapStatusKeywordPage />;
}
