import Tibia76RealMapClientKeywordPage, { generateMetadata } from './tibia-7-6-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapClientKeywordPage />;
}
