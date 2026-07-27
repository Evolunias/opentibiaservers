import FreshStartRookgaardTalesWikiKeywordPage, { generateMetadata } from './fresh-start-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRookgaardTalesWikiKeywordPage />;
}
