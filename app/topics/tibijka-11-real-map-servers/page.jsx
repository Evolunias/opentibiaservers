import Tibijka11RealMapServersKeywordPage, { generateMetadata } from './tibijka-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11RealMapServersKeywordPage />;
}
