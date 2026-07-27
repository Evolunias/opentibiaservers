import TopMidhemWikiKeywordPage, { generateMetadata } from './top-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemWikiKeywordPage />;
}
