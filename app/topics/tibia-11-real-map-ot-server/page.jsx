import Tibia11RealMapOtServerKeywordPage, { generateMetadata } from './tibia-11-real-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapOtServerKeywordPage />;
}
