import Alastera15RealMapServersKeywordPage, { generateMetadata } from './alastera-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15RealMapServersKeywordPage />;
}
