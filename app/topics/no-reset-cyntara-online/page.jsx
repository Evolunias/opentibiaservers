import NoResetCyntaraOnlineKeywordPage, { generateMetadata } from './no-reset-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraOnlineKeywordPage />;
}
