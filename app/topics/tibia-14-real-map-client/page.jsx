import Tibia14RealMapClientKeywordPage, { generateMetadata } from './tibia-14-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapClientKeywordPage />;
}
