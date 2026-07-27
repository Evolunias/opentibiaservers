import RealMapOlderaWikiKeywordPage, { generateMetadata } from './real-map-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaWikiKeywordPage />;
}
