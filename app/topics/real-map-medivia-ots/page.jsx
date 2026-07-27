import RealMapMediviaOtsKeywordPage, { generateMetadata } from './real-map-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaOtsKeywordPage />;
}
