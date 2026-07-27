import Luminera11RealMapServersKeywordPage, { generateMetadata } from './luminera-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11RealMapServersKeywordPage />;
}
