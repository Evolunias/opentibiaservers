import Luminera12CustomMapServersKeywordPage, { generateMetadata } from './luminera-12-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12CustomMapServersKeywordPage />;
}
