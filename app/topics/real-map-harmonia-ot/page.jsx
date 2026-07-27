import RealMapHarmoniaOtKeywordPage, { generateMetadata } from './real-map-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapHarmoniaOtKeywordPage />;
}
