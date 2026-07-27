import PopularVenoreotOnlineKeywordPage, { generateMetadata } from './popular-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotOnlineKeywordPage />;
}
