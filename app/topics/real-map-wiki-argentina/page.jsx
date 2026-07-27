import RealMapWikiArgentinaKeywordPage, { generateMetadata } from './real-map-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiArgentinaKeywordPage />;
}
