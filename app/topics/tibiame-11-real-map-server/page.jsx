import Tibiame11RealMapServerKeywordPage, { generateMetadata } from './tibiame-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11RealMapServerKeywordPage />;
}
