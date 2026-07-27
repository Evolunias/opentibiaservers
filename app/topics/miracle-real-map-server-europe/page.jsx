import MiracleRealMapServerEuropeKeywordPage, { generateMetadata } from './miracle-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRealMapServerEuropeKeywordPage />;
}
