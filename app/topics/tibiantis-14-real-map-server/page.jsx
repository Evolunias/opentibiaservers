import Tibiantis14RealMapServerKeywordPage, { generateMetadata } from './tibiantis-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis14RealMapServerKeywordPage />;
}
