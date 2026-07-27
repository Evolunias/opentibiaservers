import MediviaRealMapServerBrazilKeywordPage, { generateMetadata } from './medivia-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServerBrazilKeywordPage />;
}
