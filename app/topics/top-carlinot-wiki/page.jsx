import TopCarlinotWikiKeywordPage, { generateMetadata } from './top-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotWikiKeywordPage />;
}
