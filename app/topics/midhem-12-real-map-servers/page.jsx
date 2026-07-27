import Midhem12RealMapServersKeywordPage, { generateMetadata } from './midhem-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12RealMapServersKeywordPage />;
}
