import HighrateXanteriaWikiKeywordPage, { generateMetadata } from './highrate-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaWikiKeywordPage />;
}
