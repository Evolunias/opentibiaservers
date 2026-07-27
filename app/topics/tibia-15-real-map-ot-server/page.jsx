import Tibia15RealMapOtServerKeywordPage, { generateMetadata } from './tibia-15-real-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapOtServerKeywordPage />;
}
