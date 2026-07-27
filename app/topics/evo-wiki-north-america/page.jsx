import EvoWikiNorthAmericaKeywordPage, { generateMetadata } from './evo-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiNorthAmericaKeywordPage />;
}
