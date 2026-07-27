import TopVenoreotOnlineKeywordPage, { generateMetadata } from './top-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotOnlineKeywordPage />;
}
