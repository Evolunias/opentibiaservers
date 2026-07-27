import MediviaRealMapServersGermanyKeywordPage, { generateMetadata } from './medivia-real-map-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServersGermanyKeywordPage />;
}
