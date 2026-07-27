import Luminera96CustomMapServersKeywordPage, { generateMetadata } from './luminera-9-6-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96CustomMapServersKeywordPage />;
}
