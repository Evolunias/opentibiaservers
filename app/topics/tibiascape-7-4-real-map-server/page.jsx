import Tibiascape74RealMapServerKeywordPage, { generateMetadata } from './tibiascape-7-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape74RealMapServerKeywordPage />;
}
