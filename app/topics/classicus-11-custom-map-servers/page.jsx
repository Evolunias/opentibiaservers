import Classicus11CustomMapServersKeywordPage, { generateMetadata } from './classicus-11-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11CustomMapServersKeywordPage />;
}
