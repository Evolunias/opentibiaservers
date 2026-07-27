import Canob14RealMapServersKeywordPage, { generateMetadata } from './canob-14-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14RealMapServersKeywordPage />;
}
