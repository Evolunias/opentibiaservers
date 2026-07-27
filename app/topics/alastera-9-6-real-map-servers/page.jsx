import Alastera96RealMapServersKeywordPage, { generateMetadata } from './alastera-9-6-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96RealMapServersKeywordPage />;
}
