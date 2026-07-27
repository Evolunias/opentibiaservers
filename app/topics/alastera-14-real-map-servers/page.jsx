import Alastera14RealMapServersKeywordPage, { generateMetadata } from './alastera-14-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14RealMapServersKeywordPage />;
}
