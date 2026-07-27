import FreshStartEvoleraWikiKeywordPage, { generateMetadata } from './fresh-start-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraWikiKeywordPage />;
}
