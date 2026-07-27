import RealMapElderaOnlineKeywordPage, { generateMetadata } from './real-map-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaOnlineKeywordPage />;
}
