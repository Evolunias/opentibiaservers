import RealMapOxygenotWikiKeywordPage, { generateMetadata } from './real-map-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotWikiKeywordPage />;
}
