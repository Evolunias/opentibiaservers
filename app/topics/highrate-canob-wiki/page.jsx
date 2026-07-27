import HighrateCanobWikiKeywordPage, { generateMetadata } from './highrate-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobWikiKeywordPage />;
}
