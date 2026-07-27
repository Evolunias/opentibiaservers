import Tibianus96RealMapServerKeywordPage, { generateMetadata } from './tibianus-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus96RealMapServerKeywordPage />;
}
