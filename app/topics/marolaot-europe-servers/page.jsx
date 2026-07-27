import MarolaotEuropeServersKeywordPage, { generateMetadata } from './marolaot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotEuropeServersKeywordPage />;
}
