import NewSeasonVenoreotOtKeywordPage, { generateMetadata } from './new-season-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotOtKeywordPage />;
}
