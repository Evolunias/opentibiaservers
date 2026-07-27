import FreshStartThaisotWikiKeywordPage, { generateMetadata } from './fresh-start-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotWikiKeywordPage />;
}
