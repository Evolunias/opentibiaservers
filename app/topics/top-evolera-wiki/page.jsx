import TopEvoleraWikiKeywordPage, { generateMetadata } from './top-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraWikiKeywordPage />;
}
