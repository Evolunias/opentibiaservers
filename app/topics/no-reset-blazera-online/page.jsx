import NoResetBlazeraOnlineKeywordPage, { generateMetadata } from './no-reset-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraOnlineKeywordPage />;
}
