import HighrateArcaniarlWikiKeywordPage, { generateMetadata } from './highrate-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlWikiKeywordPage />;
}
