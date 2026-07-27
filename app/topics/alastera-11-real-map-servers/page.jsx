import Alastera11RealMapServersKeywordPage, { generateMetadata } from './alastera-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11RealMapServersKeywordPage />;
}
