import Tibiascape96RealMapServerKeywordPage, { generateMetadata } from './tibiascape-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape96RealMapServerKeywordPage />;
}
