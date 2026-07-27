import EvoWikiArgentinaKeywordPage, { generateMetadata } from './evo-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiArgentinaKeywordPage />;
}
