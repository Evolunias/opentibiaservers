import KasteriaRealMapServerMexicoKeywordPage, { generateMetadata } from './kasteria-real-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRealMapServerMexicoKeywordPage />;
}
