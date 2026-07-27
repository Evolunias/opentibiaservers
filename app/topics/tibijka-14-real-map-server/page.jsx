import Tibijka14RealMapServerKeywordPage, { generateMetadata } from './tibijka-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14RealMapServerKeywordPage />;
}
