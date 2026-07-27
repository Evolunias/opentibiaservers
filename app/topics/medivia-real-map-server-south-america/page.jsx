import MediviaRealMapServerSouthAmericaKeywordPage, { generateMetadata } from './medivia-real-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServerSouthAmericaKeywordPage />;
}
