import RealMapBlazeraWikiKeywordPage, { generateMetadata } from './real-map-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraWikiKeywordPage />;
}
