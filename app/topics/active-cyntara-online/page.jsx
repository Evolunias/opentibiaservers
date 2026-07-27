import ActiveCyntaraOnlineKeywordPage, { generateMetadata } from './active-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraOnlineKeywordPage />;
}
