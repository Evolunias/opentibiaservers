import PopularRookgaardTalesWikiKeywordPage, { generateMetadata } from './popular-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRookgaardTalesWikiKeywordPage />;
}
