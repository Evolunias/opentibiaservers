import Oldera86RealMapServerKeywordPage, { generateMetadata } from './oldera-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86RealMapServerKeywordPage />;
}
