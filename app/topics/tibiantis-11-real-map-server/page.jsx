import Tibiantis11RealMapServerKeywordPage, { generateMetadata } from './tibiantis-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11RealMapServerKeywordPage />;
}
