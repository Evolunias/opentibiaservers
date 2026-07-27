import Kasteria12RealMapServerKeywordPage, { generateMetadata } from './kasteria-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12RealMapServerKeywordPage />;
}
