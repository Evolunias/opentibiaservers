import Tibia13RealMapStatusKeywordPage, { generateMetadata } from './tibia-13-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapStatusKeywordPage />;
}
