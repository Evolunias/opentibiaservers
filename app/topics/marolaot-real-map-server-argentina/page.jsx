import MarolaotRealMapServerArgentinaKeywordPage, { generateMetadata } from './marolaot-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotRealMapServerArgentinaKeywordPage />;
}
