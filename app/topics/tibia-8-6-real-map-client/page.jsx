import Tibia86RealMapClientKeywordPage, { generateMetadata } from './tibia-8-6-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapClientKeywordPage />;
}
