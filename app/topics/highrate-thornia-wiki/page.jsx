import HighrateThorniaWikiKeywordPage, { generateMetadata } from './highrate-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaWikiKeywordPage />;
}
