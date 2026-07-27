import ActiveVenoreotOnlineKeywordPage, { generateMetadata } from './active-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotOnlineKeywordPage />;
}
