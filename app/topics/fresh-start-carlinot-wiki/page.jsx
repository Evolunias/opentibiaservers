import FreshStartCarlinotWikiKeywordPage, { generateMetadata } from './fresh-start-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotWikiKeywordPage />;
}
