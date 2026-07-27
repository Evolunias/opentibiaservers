import NewAlasteraWikiKeywordPage, { generateMetadata } from './new-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraWikiKeywordPage />;
}
