import Tibia80RealMapOtServerKeywordPage, { generateMetadata } from './tibia-8-0-real-map-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapOtServerKeywordPage />;
}
