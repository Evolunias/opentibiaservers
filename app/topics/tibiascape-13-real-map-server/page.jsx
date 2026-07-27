import Tibiascape13RealMapServerKeywordPage, { generateMetadata } from './tibiascape-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13RealMapServerKeywordPage />;
}
