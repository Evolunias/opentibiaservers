import Midhem15RealMapServersKeywordPage, { generateMetadata } from './midhem-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15RealMapServersKeywordPage />;
}
