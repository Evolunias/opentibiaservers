import TopMiracleWikiKeywordPage, { generateMetadata } from './top-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleWikiKeywordPage />;
}
