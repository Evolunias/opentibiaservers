import Canob13RealMapServersKeywordPage, { generateMetadata } from './canob-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13RealMapServersKeywordPage />;
}
