import HighrateRookgaardTalesWikiKeywordPage, { generateMetadata } from './highrate-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRookgaardTalesWikiKeywordPage />;
}
