import Tibiascape15RealMapServersKeywordPage, { generateMetadata } from './tibiascape-15-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15RealMapServersKeywordPage />;
}
