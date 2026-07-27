import Tibianus11RealMapServerKeywordPage, { generateMetadata } from './tibianus-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11RealMapServerKeywordPage />;
}
