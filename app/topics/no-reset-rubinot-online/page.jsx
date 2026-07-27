import NoResetRubinotOnlineKeywordPage, { generateMetadata } from './no-reset-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotOnlineKeywordPage />;
}
