import TopCyntaraOnlineKeywordPage, { generateMetadata } from './top-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraOnlineKeywordPage />;
}
