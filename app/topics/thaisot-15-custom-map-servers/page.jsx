import Thaisot15CustomMapServersKeywordPage, { generateMetadata } from './thaisot-15-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15CustomMapServersKeywordPage />;
}
