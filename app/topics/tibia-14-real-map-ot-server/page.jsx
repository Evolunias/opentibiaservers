import Tibia14RealMapOtServerKeywordPage, { generateMetadata } from './tibia-14-real-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapOtServerKeywordPage />;
}
