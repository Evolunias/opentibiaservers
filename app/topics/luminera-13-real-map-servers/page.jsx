import Luminera13RealMapServersKeywordPage, { generateMetadata } from './luminera-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13RealMapServersKeywordPage />;
}
