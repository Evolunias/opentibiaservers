import Ameria11RealMapServersKeywordPage, { generateMetadata } from './ameria-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11RealMapServersKeywordPage />;
}
