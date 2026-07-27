import MarolaotEuropeServerKeywordPage, { generateMetadata } from './marolaot-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotEuropeServerKeywordPage />;
}
