import TibiascapeRealMapServerCanadaKeywordPage, { generateMetadata } from './tibiascape-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRealMapServerCanadaKeywordPage />;
}
