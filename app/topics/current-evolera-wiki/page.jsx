import CurrentEvoleraWikiKeywordPage, { generateMetadata } from './current-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraWikiKeywordPage />;
}
