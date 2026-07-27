import Tibiascape15RealMapServerKeywordPage, { generateMetadata } from './tibiascape-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15RealMapServerKeywordPage />;
}
