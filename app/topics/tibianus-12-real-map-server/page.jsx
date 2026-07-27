import Tibianus12RealMapServerKeywordPage, { generateMetadata } from './tibianus-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12RealMapServerKeywordPage />;
}
