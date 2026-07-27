import EvoWikiUkKeywordPage, { generateMetadata } from './evo-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiUkKeywordPage />;
}
