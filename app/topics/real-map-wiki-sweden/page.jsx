import RealMapWikiSwedenKeywordPage, { generateMetadata } from './real-map-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiSwedenKeywordPage />;
}
