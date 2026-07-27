import NewOxygenotOnlineKeywordPage, { generateMetadata } from './new-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotOnlineKeywordPage />;
}
