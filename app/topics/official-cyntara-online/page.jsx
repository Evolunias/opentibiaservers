import OfficialCyntaraOnlineKeywordPage, { generateMetadata } from './official-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraOnlineKeywordPage />;
}
