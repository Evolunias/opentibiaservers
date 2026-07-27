import Kasteria15RealMapServerKeywordPage, { generateMetadata } from './kasteria-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15RealMapServerKeywordPage />;
}
