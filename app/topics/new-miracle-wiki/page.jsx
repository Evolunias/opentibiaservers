import NewMiracleWikiKeywordPage, { generateMetadata } from './new-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleWikiKeywordPage />;
}
