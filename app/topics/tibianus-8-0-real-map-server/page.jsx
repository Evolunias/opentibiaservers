import Tibianus80RealMapServerKeywordPage, { generateMetadata } from './tibianus-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus80RealMapServerKeywordPage />;
}
