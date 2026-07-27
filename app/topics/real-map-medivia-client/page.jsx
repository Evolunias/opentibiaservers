import RealMapMediviaClientKeywordPage, { generateMetadata } from './real-map-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaClientKeywordPage />;
}
