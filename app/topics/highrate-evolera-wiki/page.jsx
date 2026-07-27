import HighrateEvoleraWikiKeywordPage, { generateMetadata } from './highrate-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraWikiKeywordPage />;
}
