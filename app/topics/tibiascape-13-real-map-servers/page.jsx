import Tibiascape13RealMapServersKeywordPage, { generateMetadata } from './tibiascape-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13RealMapServersKeywordPage />;
}
