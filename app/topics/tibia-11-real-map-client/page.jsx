import Tibia11RealMapClientKeywordPage, { generateMetadata } from './tibia-11-real-map-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapClientKeywordPage />;
}
