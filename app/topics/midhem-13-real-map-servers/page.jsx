import Midhem13RealMapServersKeywordPage, { generateMetadata } from './midhem-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13RealMapServersKeywordPage />;
}
