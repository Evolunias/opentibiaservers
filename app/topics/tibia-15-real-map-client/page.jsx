import Tibia15RealMapClientKeywordPage, { generateMetadata } from './tibia-15-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapClientKeywordPage />;
}
