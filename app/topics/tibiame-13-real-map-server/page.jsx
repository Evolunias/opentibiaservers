import Tibiame13RealMapServerKeywordPage, { generateMetadata } from './tibiame-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13RealMapServerKeywordPage />;
}
