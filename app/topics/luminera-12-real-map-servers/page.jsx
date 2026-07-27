import Luminera12RealMapServersKeywordPage, { generateMetadata } from './luminera-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12RealMapServersKeywordPage />;
}
