import Tibijka84RealMapServerKeywordPage, { generateMetadata } from './tibijka-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka84RealMapServerKeywordPage />;
}
