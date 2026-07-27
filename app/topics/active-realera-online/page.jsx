import ActiveRealeraOnlineKeywordPage, { generateMetadata } from './active-realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraOnlineKeywordPage />;
}
