import Kasteria96RealMapServerKeywordPage, { generateMetadata } from './kasteria-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria96RealMapServerKeywordPage />;
}
