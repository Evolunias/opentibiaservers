import Midhem96CustomMapServersKeywordPage, { generateMetadata } from './midhem-9-6-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96CustomMapServersKeywordPage />;
}
