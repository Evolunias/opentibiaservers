import NonPvpWikiMexicoKeywordPage, { generateMetadata } from './non-pvp-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpWikiMexicoKeywordPage />;
}
