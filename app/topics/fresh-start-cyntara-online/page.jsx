import FreshStartCyntaraOnlineKeywordPage, { generateMetadata } from './fresh-start-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraOnlineKeywordPage />;
}
