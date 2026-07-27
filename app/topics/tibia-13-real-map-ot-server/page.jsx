import Tibia13RealMapOtServerKeywordPage, { generateMetadata } from './tibia-13-real-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapOtServerKeywordPage />;
}
