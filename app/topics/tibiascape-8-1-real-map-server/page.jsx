import Tibiascape81RealMapServerKeywordPage, { generateMetadata } from './tibiascape-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape81RealMapServerKeywordPage />;
}
