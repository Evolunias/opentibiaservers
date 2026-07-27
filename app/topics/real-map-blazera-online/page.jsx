import RealMapBlazeraOnlineKeywordPage, { generateMetadata } from './real-map-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraOnlineKeywordPage />;
}
