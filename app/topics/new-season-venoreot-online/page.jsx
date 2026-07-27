import NewSeasonVenoreotOnlineKeywordPage, { generateMetadata } from './new-season-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotOnlineKeywordPage />;
}
