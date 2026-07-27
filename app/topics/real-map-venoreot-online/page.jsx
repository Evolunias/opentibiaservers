import RealMapVenoreotOnlineKeywordPage, { generateMetadata } from './real-map-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotOnlineKeywordPage />;
}
