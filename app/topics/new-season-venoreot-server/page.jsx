import NewSeasonVenoreotServerKeywordPage, { generateMetadata } from './new-season-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotServerKeywordPage />;
}
