import HighrateAureraGlobalWikiKeywordPage, { generateMetadata } from './highrate-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAureraGlobalWikiKeywordPage />;
}
