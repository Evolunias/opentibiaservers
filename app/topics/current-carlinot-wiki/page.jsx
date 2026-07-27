import CurrentCarlinotWikiKeywordPage, { generateMetadata } from './current-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotWikiKeywordPage />;
}
