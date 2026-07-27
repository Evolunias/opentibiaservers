import HighrateClassicusWikiKeywordPage, { generateMetadata } from './highrate-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusWikiKeywordPage />;
}
