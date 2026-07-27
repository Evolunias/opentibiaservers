import Tibiascape80RealMapServerKeywordPage, { generateMetadata } from './tibiascape-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80RealMapServerKeywordPage />;
}
