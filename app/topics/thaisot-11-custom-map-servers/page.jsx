import Thaisot11CustomMapServersKeywordPage, { generateMetadata } from './thaisot-11-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11CustomMapServersKeywordPage />;
}
