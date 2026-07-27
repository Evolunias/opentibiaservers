import HighrateKasteriaWikiKeywordPage, { generateMetadata } from './highrate-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaWikiKeywordPage />;
}
