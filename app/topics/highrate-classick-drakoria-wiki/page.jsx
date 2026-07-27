import HighrateClassickDrakoriaWikiKeywordPage, { generateMetadata } from './highrate-classick-drakoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassickDrakoriaWikiKeywordPage />;
}
