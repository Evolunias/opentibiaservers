import Tibiascape71RealMapServerKeywordPage, { generateMetadata } from './tibiascape-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape71RealMapServerKeywordPage />;
}
