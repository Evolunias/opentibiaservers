import Ameria15RealMapServersKeywordPage, { generateMetadata } from './ameria-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15RealMapServersKeywordPage />;
}
