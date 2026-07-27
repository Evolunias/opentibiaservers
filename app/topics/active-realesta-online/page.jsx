import ActiveRealestaOnlineKeywordPage, { generateMetadata } from './active-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaOnlineKeywordPage />;
}
