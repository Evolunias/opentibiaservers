import EvoWikiUsaKeywordPage, { generateMetadata } from './evo-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiUsaKeywordPage />;
}
