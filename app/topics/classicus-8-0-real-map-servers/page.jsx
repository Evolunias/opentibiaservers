import Classicus80RealMapServersKeywordPage, { generateMetadata } from './classicus-8-0-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80RealMapServersKeywordPage />;
}
