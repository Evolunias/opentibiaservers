import EvoWikiCanadaKeywordPage, { generateMetadata } from './evo-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiCanadaKeywordPage />;
}
