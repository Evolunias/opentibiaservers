import NewSeasonVenoreotOtServerKeywordPage, { generateMetadata } from './new-season-venoreot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotOtServerKeywordPage />;
}
