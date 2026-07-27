import RealMapWikiMexicoKeywordPage, { generateMetadata } from './real-map-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiMexicoKeywordPage />;
}
