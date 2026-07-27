import Oldera11RealMapServersKeywordPage, { generateMetadata } from './oldera-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11RealMapServersKeywordPage />;
}
