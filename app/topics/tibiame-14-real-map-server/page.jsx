import Tibiame14RealMapServerKeywordPage, { generateMetadata } from './tibiame-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame14RealMapServerKeywordPage />;
}
