import NewVenoreotWikiKeywordPage, { generateMetadata } from './new-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotWikiKeywordPage />;
}
