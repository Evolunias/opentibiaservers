import Canob11RealMapServersKeywordPage, { generateMetadata } from './canob-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11RealMapServersKeywordPage />;
}
