import Tibiantis12RealMapServerKeywordPage, { generateMetadata } from './tibiantis-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis12RealMapServerKeywordPage />;
}
