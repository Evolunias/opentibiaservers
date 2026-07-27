import Tibijka15RealMapServerKeywordPage, { generateMetadata } from './tibijka-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15RealMapServerKeywordPage />;
}
