import FreshStartVenoreotOnlineKeywordPage, { generateMetadata } from './fresh-start-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotOnlineKeywordPage />;
}
