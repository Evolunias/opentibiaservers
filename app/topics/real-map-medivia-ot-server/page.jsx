import RealMapMediviaOtServerKeywordPage, { generateMetadata } from './real-map-medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaOtServerKeywordPage />;
}
