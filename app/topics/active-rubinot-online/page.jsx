import ActiveRubinotOnlineKeywordPage, { generateMetadata } from './active-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotOnlineKeywordPage />;
}
