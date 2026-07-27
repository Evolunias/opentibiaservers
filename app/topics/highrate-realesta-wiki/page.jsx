import HighrateRealestaWikiKeywordPage, { generateMetadata } from './highrate-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaWikiKeywordPage />;
}
