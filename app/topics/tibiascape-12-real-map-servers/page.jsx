import Tibiascape12RealMapServersKeywordPage, { generateMetadata } from './tibiascape-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12RealMapServersKeywordPage />;
}
