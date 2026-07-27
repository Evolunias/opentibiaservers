import RealMapNepreniaOtServerKeywordPage, { generateMetadata } from './real-map-neprenia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaOtServerKeywordPage />;
}
