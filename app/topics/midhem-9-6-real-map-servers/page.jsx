import Midhem96RealMapServersKeywordPage, { generateMetadata } from './midhem-9-6-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96RealMapServersKeywordPage />;
}
