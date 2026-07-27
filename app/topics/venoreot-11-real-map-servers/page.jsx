import Venoreot11RealMapServersKeywordPage, { generateMetadata } from './venoreot-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot11RealMapServersKeywordPage />;
}
