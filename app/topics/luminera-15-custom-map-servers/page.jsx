import Luminera15CustomMapServersKeywordPage, { generateMetadata } from './luminera-15-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15CustomMapServersKeywordPage />;
}
