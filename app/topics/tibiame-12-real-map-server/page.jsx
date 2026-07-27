import Tibiame12RealMapServerKeywordPage, { generateMetadata } from './tibiame-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12RealMapServerKeywordPage />;
}
