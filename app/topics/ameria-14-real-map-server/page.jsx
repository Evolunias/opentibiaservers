import Ameria14RealMapServerKeywordPage, { generateMetadata } from './ameria-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria14RealMapServerKeywordPage />;
}
