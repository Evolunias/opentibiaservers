import MiracleRealMapServerMexicoKeywordPage, { generateMetadata } from './miracle-real-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRealMapServerMexicoKeywordPage />;
}
