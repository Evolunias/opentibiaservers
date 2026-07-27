import Tibia96RealMapOtServerKeywordPage, { generateMetadata } from './tibia-9-6-real-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapOtServerKeywordPage />;
}
