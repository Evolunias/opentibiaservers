import Luminera15RealMapServersKeywordPage, { generateMetadata } from './luminera-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15RealMapServersKeywordPage />;
}
