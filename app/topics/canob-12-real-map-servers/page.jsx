import Canob12RealMapServersKeywordPage, { generateMetadata } from './canob-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12RealMapServersKeywordPage />;
}
