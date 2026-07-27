import RealMapTibijkaWikiKeywordPage, { generateMetadata } from './real-map-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaWikiKeywordPage />;
}
