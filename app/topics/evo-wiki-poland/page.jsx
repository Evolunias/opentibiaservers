import EvoWikiPolandKeywordPage, { generateMetadata } from './evo-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiPolandKeywordPage />;
}
