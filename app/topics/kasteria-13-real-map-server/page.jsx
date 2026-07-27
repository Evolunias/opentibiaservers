import Kasteria13RealMapServerKeywordPage, { generateMetadata } from './kasteria-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13RealMapServerKeywordPage />;
}
