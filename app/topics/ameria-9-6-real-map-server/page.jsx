import Ameria96RealMapServerKeywordPage, { generateMetadata } from './ameria-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria96RealMapServerKeywordPage />;
}
