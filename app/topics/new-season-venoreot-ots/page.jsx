import NewSeasonVenoreotOtsKeywordPage, { generateMetadata } from './new-season-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotOtsKeywordPage />;
}
