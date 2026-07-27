import Oldera81RealMapServerKeywordPage, { generateMetadata } from './oldera-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera81RealMapServerKeywordPage />;
}
