import BestRookgaardTalesWikiKeywordPage, { generateMetadata } from './best-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRookgaardTalesWikiKeywordPage />;
}
