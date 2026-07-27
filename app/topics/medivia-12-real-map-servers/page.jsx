import Medivia12RealMapServersKeywordPage, { generateMetadata } from './medivia-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12RealMapServersKeywordPage />;
}
