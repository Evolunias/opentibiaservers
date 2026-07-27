import Classicus96RealMapServersKeywordPage, { generateMetadata } from './classicus-9-6-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96RealMapServersKeywordPage />;
}
