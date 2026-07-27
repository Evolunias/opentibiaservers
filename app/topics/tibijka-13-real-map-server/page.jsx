import Tibijka13RealMapServerKeywordPage, { generateMetadata } from './tibijka-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13RealMapServerKeywordPage />;
}
