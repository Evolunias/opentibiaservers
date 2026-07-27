import RealMapHarmoniaOtServerKeywordPage, { generateMetadata } from './real-map-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapHarmoniaOtServerKeywordPage />;
}
