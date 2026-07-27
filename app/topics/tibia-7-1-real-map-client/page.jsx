import Tibia71RealMapClientKeywordPage, { generateMetadata } from './tibia-7-1-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RealMapClientKeywordPage />;
}
