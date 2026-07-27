import RealMapTibiaraWikiKeywordPage, { generateMetadata } from './real-map-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraWikiKeywordPage />;
}
