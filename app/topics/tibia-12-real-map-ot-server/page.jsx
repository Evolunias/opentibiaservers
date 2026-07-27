import Tibia12RealMapOtServerKeywordPage, { generateMetadata } from './tibia-12-real-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapOtServerKeywordPage />;
}
