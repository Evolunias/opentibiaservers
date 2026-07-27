import Tibiascape11RealMapServersKeywordPage, { generateMetadata } from './tibiascape-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11RealMapServersKeywordPage />;
}
