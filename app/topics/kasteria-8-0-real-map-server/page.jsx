import Kasteria80RealMapServerKeywordPage, { generateMetadata } from './kasteria-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80RealMapServerKeywordPage />;
}
