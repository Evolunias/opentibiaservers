import MarolaotSimilarServersKeywordPage, { generateMetadata } from './marolaot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSimilarServersKeywordPage />;
}
