import HighrateImperianicWikiKeywordPage, { generateMetadata } from './highrate-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicWikiKeywordPage />;
}
