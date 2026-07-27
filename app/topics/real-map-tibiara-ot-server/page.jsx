import RealMapTibiaraOtServerKeywordPage, { generateMetadata } from './real-map-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraOtServerKeywordPage />;
}
