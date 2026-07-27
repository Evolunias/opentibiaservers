import NewSaintsotWikiKeywordPage, { generateMetadata } from './new-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotWikiKeywordPage />;
}
