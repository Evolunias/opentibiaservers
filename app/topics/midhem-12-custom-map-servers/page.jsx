import Midhem12CustomMapServersKeywordPage, { generateMetadata } from './midhem-12-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12CustomMapServersKeywordPage />;
}
