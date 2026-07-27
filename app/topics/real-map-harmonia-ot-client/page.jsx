import RealMapHarmoniaOtClientKeywordPage, { generateMetadata } from './real-map-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapHarmoniaOtClientKeywordPage />;
}
