import EvoWikiSouthAmericaKeywordPage, { generateMetadata } from './evo-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiSouthAmericaKeywordPage />;
}
