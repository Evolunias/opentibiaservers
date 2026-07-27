import RealMapCyntaraOnlineKeywordPage, { generateMetadata } from './real-map-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraOnlineKeywordPage />;
}
