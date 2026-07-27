import TopRookgaardTalesWikiKeywordPage, { generateMetadata } from './top-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesWikiKeywordPage />;
}
