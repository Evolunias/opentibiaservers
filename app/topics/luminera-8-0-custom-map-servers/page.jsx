import Luminera80CustomMapServersKeywordPage, { generateMetadata } from './luminera-8-0-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80CustomMapServersKeywordPage />;
}
