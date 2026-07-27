import EvoWikiEuropeKeywordPage, { generateMetadata } from './evo-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiEuropeKeywordPage />;
}
