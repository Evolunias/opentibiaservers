import MiracleRealMapServerCanadaKeywordPage, { generateMetadata } from './miracle-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleRealMapServerCanadaKeywordPage />;
}
