import NewThaisotWikiKeywordPage, { generateMetadata } from './new-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotWikiKeywordPage />;
}
