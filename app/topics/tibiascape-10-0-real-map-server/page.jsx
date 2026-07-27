import Tibiascape100RealMapServerKeywordPage, { generateMetadata } from './tibiascape-10-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape100RealMapServerKeywordPage />;
}
