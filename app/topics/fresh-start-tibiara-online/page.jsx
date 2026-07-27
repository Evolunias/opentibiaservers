import FreshStartTibiaraOnlineKeywordPage, { generateMetadata } from './fresh-start-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraOnlineKeywordPage />;
}
