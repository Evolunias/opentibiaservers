import RealMapCanobWikiKeywordPage, { generateMetadata } from './real-map-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobWikiKeywordPage />;
}
