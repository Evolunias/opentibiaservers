import Midhem11RealMapServersKeywordPage, { generateMetadata } from './midhem-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11RealMapServersKeywordPage />;
}
