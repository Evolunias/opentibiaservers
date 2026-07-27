import Tibia12RealMapClientKeywordPage, { generateMetadata } from './tibia-12-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapClientKeywordPage />;
}
