import NewCyntaraOnlineKeywordPage, { generateMetadata } from './new-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraOnlineKeywordPage />;
}
