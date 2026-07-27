import HighrateUnlineWikiKeywordPage, { generateMetadata } from './highrate-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineWikiKeywordPage />;
}
