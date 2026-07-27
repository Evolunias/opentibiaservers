import EvoWikiLatinAmericaKeywordPage, { generateMetadata } from './evo-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiLatinAmericaKeywordPage />;
}
