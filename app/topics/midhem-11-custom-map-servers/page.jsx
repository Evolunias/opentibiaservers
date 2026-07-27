import Midhem11CustomMapServersKeywordPage, { generateMetadata } from './midhem-11-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11CustomMapServersKeywordPage />;
}
