import PvpeWikiMexicoKeywordPage, { generateMetadata } from './pvpe-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiMexicoKeywordPage />;
}
