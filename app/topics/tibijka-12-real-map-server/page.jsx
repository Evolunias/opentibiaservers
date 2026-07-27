import Tibijka12RealMapServerKeywordPage, { generateMetadata } from './tibijka-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12RealMapServerKeywordPage />;
}
