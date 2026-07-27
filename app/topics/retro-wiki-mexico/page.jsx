import RetroWikiMexicoKeywordPage, { generateMetadata } from './retro-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiMexicoKeywordPage />;
}
