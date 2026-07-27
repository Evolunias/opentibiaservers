import NoResetTibiaraOnlineKeywordPage, { generateMetadata } from './no-reset-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraOnlineKeywordPage />;
}
