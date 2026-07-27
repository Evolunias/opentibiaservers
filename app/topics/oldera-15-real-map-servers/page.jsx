import Oldera15RealMapServersKeywordPage, { generateMetadata } from './oldera-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15RealMapServersKeywordPage />;
}
