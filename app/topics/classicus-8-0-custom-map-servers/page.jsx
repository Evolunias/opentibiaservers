import Classicus80CustomMapServersKeywordPage, { generateMetadata } from './classicus-8-0-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80CustomMapServersKeywordPage />;
}
