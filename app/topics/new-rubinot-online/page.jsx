import NewRubinotOnlineKeywordPage, { generateMetadata } from './new-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotOnlineKeywordPage />;
}
