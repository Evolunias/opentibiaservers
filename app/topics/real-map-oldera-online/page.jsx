import RealMapOlderaOnlineKeywordPage, { generateMetadata } from './real-map-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaOnlineKeywordPage />;
}
