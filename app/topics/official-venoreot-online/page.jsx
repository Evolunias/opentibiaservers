import OfficialVenoreotOnlineKeywordPage, { generateMetadata } from './official-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotOnlineKeywordPage />;
}
