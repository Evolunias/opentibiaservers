import PytheraWikiKeywordPage, { generateMetadata } from './pythera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraWikiKeywordPage />;
}
