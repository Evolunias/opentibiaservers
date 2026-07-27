import Alastera12RealMapServersKeywordPage, { generateMetadata } from './alastera-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12RealMapServersKeywordPage />;
}
