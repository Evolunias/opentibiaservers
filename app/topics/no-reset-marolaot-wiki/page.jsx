import NoResetMarolaotWikiKeywordPage, { generateMetadata } from './no-reset-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMarolaotWikiKeywordPage />;
}
