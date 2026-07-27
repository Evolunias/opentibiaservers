import Thaisot11RealMapServersKeywordPage, { generateMetadata } from './thaisot-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11RealMapServersKeywordPage />;
}
