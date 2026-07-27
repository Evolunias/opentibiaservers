import TopCanobWikiKeywordPage, { generateMetadata } from './top-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobWikiKeywordPage />;
}
