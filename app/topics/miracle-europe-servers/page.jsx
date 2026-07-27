import MiracleEuropeServersKeywordPage, { generateMetadata } from './miracle-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleEuropeServersKeywordPage />;
}
