import BestMarolaotWikiKeywordPage, { generateMetadata } from './best-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMarolaotWikiKeywordPage />;
}
