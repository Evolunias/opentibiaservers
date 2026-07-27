import Medivia11RealMapServersKeywordPage, { generateMetadata } from './medivia-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11RealMapServersKeywordPage />;
}
