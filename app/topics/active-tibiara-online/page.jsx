import ActiveTibiaraOnlineKeywordPage, { generateMetadata } from './active-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraOnlineKeywordPage />;
}
