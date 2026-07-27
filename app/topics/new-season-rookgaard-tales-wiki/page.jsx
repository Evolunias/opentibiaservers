import NewSeasonRookgaardTalesWikiKeywordPage, { generateMetadata } from './new-season-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRookgaardTalesWikiKeywordPage />;
}
