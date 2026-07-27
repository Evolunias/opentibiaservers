import TibiameRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './tibiame-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameRealMapServerLatinAmericaKeywordPage />;
}
