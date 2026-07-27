import Tibiame80RealMapServerKeywordPage, { generateMetadata } from './tibiame-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame80RealMapServerKeywordPage />;
}
