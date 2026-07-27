import NewCarlinotWikiKeywordPage, { generateMetadata } from './new-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotWikiKeywordPage />;
}
