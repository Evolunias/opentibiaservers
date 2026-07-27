import ActiveImperianicOnlineKeywordPage, { generateMetadata } from './active-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicOnlineKeywordPage />;
}
