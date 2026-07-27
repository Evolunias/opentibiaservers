import LowrateCyntaraOnlineKeywordPage, { generateMetadata } from './lowrate-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraOnlineKeywordPage />;
}
