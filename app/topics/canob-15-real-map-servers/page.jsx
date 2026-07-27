import Canob15RealMapServersKeywordPage, { generateMetadata } from './canob-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15RealMapServersKeywordPage />;
}
