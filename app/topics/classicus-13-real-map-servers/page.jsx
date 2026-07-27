import Classicus13RealMapServersKeywordPage, { generateMetadata } from './classicus-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13RealMapServersKeywordPage />;
}
