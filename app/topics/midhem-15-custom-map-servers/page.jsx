import Midhem15CustomMapServersKeywordPage, { generateMetadata } from './midhem-15-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15CustomMapServersKeywordPage />;
}
