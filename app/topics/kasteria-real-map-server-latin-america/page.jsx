import KasteriaRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './kasteria-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRealMapServerLatinAmericaKeywordPage />;
}
