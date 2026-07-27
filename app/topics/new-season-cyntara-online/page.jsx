import NewSeasonCyntaraOnlineKeywordPage, { generateMetadata } from './new-season-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraOnlineKeywordPage />;
}
