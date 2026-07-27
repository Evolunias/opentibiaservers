import Tibiantis15RealMapServerKeywordPage, { generateMetadata } from './tibiantis-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis15RealMapServerKeywordPage />;
}
