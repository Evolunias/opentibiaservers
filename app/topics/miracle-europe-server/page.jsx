import MiracleEuropeServerKeywordPage, { generateMetadata } from './miracle-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleEuropeServerKeywordPage />;
}
