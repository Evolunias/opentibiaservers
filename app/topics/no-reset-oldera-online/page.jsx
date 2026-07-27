import NoResetOlderaOnlineKeywordPage, { generateMetadata } from './no-reset-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaOnlineKeywordPage />;
}
