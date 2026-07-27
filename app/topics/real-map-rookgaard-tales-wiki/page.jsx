import RealMapRookgaardTalesWikiKeywordPage, { generateMetadata } from './real-map-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRookgaardTalesWikiKeywordPage />;
}
