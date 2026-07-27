import HighrateRealeraWikiKeywordPage, { generateMetadata } from './highrate-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraWikiKeywordPage />;
}
