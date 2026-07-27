import CurrentOxygenotWikiKeywordPage, { generateMetadata } from './current-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotWikiKeywordPage />;
}
