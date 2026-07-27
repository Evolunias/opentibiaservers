import Tibia772RealMapStatusKeywordPage, { generateMetadata } from './tibia-7-72-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RealMapStatusKeywordPage />;
}
