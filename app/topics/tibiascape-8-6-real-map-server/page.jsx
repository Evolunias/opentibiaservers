import Tibiascape86RealMapServerKeywordPage, { generateMetadata } from './tibiascape-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape86RealMapServerKeywordPage />;
}
