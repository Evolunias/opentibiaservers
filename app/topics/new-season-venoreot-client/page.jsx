import NewSeasonVenoreotClientKeywordPage, { generateMetadata } from './new-season-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotClientKeywordPage />;
}
