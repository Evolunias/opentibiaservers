import NewTibiaraOnlineKeywordPage, { generateMetadata } from './new-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraOnlineKeywordPage />;
}
