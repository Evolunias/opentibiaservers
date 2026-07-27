import MediviaRealMapServerPolandKeywordPage, { generateMetadata } from './medivia-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServerPolandKeywordPage />;
}
