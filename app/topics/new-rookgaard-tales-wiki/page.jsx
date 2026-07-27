import NewRookgaardTalesWikiKeywordPage, { generateMetadata } from './new-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRookgaardTalesWikiKeywordPage />;
}
