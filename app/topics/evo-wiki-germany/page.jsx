import EvoWikiGermanyKeywordPage, { generateMetadata } from './evo-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiGermanyKeywordPage />;
}
