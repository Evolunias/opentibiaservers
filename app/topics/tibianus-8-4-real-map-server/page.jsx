import Tibianus84RealMapServerKeywordPage, { generateMetadata } from './tibianus-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus84RealMapServerKeywordPage />;
}
