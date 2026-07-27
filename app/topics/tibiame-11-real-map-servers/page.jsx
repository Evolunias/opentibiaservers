import Tibiame11RealMapServersKeywordPage, { generateMetadata } from './tibiame-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11RealMapServersKeywordPage />;
}
