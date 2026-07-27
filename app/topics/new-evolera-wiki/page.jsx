import NewEvoleraWikiKeywordPage, { generateMetadata } from './new-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraWikiKeywordPage />;
}
