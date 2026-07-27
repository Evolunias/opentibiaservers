import Classicus11RealMapServersKeywordPage, { generateMetadata } from './classicus-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11RealMapServersKeywordPage />;
}
