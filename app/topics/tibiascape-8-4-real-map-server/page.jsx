import Tibiascape84RealMapServerKeywordPage, { generateMetadata } from './tibiascape-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape84RealMapServerKeywordPage />;
}
