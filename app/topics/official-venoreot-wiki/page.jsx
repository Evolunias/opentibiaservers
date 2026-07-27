import OfficialVenoreotWikiKeywordPage, { generateMetadata } from './official-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotWikiKeywordPage />;
}
