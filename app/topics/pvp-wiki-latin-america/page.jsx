import PvpWikiLatinAmericaKeywordPage, { generateMetadata } from './pvp-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiLatinAmericaKeywordPage />;
}
