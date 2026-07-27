import Classicus12RealMapServersKeywordPage, { generateMetadata } from './classicus-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12RealMapServersKeywordPage />;
}
