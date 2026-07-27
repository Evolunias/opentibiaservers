import Ameria15RealMapServerKeywordPage, { generateMetadata } from './ameria-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15RealMapServerKeywordPage />;
}
