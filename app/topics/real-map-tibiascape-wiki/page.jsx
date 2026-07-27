import RealMapTibiascapeWikiKeywordPage, { generateMetadata } from './real-map-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeWikiKeywordPage />;
}
