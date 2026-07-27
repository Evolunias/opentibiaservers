import Tibiantis13RealMapServerKeywordPage, { generateMetadata } from './tibiantis-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis13RealMapServerKeywordPage />;
}
