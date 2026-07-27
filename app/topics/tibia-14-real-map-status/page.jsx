import Tibia14RealMapStatusKeywordPage, { generateMetadata } from './tibia-14-real-map-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapStatusKeywordPage />;
}
