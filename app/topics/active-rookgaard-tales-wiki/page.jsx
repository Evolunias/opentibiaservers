import ActiveRookgaardTalesWikiKeywordPage, { generateMetadata } from './active-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRookgaardTalesWikiKeywordPage />;
}
