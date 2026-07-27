import FreshStartAlasteraWikiKeywordPage, { generateMetadata } from './fresh-start-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraWikiKeywordPage />;
}
