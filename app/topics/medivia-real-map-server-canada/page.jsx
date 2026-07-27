import MediviaRealMapServerCanadaKeywordPage, { generateMetadata } from './medivia-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServerCanadaKeywordPage />;
}
