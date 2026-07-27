import Tibia96RealMapStatusKeywordPage, { generateMetadata } from './tibia-9-6-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapStatusKeywordPage />;
}
