import HighrateMiracleWikiKeywordPage, { generateMetadata } from './highrate-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleWikiKeywordPage />;
}
