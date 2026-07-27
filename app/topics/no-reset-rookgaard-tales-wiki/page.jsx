import NoResetRookgaardTalesWikiKeywordPage, { generateMetadata } from './no-reset-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRookgaardTalesWikiKeywordPage />;
}
