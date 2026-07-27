import ActiveVenoreotWikiKeywordPage, { generateMetadata } from './active-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotWikiKeywordPage />;
}
