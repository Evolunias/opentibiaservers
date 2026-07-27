import ActiveOxygenotOnlineKeywordPage, { generateMetadata } from './active-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotOnlineKeywordPage />;
}
