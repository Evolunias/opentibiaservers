import ActiveBlazeraOnlineKeywordPage, { generateMetadata } from './active-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraOnlineKeywordPage />;
}
