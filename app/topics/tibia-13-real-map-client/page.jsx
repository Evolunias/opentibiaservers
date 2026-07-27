import Tibia13RealMapClientKeywordPage, { generateMetadata } from './tibia-13-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapClientKeywordPage />;
}
