import Luminera96RealMapServersKeywordPage, { generateMetadata } from './luminera-9-6-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96RealMapServersKeywordPage />;
}
