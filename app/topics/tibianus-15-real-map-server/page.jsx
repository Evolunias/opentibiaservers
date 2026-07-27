import Tibianus15RealMapServerKeywordPage, { generateMetadata } from './tibianus-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15RealMapServerKeywordPage />;
}
