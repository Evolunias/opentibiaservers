import TopYurotsWikiKeywordPage, { generateMetadata } from './top-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsWikiKeywordPage />;
}
