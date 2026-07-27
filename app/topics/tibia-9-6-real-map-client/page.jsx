import Tibia96RealMapClientKeywordPage, { generateMetadata } from './tibia-9-6-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapClientKeywordPage />;
}
