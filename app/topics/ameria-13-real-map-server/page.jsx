import Ameria13RealMapServerKeywordPage, { generateMetadata } from './ameria-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13RealMapServerKeywordPage />;
}
