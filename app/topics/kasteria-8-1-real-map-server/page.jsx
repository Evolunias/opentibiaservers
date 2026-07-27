import Kasteria81RealMapServerKeywordPage, { generateMetadata } from './kasteria-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria81RealMapServerKeywordPage />;
}
