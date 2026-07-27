import LowrateVenoreotOnlineKeywordPage, { generateMetadata } from './lowrate-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotOnlineKeywordPage />;
}
