import Ameria12RealMapServerKeywordPage, { generateMetadata } from './ameria-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12RealMapServerKeywordPage />;
}
