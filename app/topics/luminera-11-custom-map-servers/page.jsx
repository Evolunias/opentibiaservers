import Luminera11CustomMapServersKeywordPage, { generateMetadata } from './luminera-11-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11CustomMapServersKeywordPage />;
}
