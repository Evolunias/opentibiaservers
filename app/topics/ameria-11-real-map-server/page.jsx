import Ameria11RealMapServerKeywordPage, { generateMetadata } from './ameria-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11RealMapServerKeywordPage />;
}
