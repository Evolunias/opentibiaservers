import Kasteria86RealMapServerKeywordPage, { generateMetadata } from './kasteria-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86RealMapServerKeywordPage />;
}
