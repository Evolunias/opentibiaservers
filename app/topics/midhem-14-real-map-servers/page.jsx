import Midhem14RealMapServersKeywordPage, { generateMetadata } from './midhem-14-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14RealMapServersKeywordPage />;
}
