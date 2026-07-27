import HighrateCyntaraOnlineKeywordPage, { generateMetadata } from './highrate-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraOnlineKeywordPage />;
}
