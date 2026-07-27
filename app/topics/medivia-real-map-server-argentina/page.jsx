import MediviaRealMapServerArgentinaKeywordPage, { generateMetadata } from './medivia-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServerArgentinaKeywordPage />;
}
