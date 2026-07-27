import NewOlderaOnlineKeywordPage, { generateMetadata } from './new-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaOnlineKeywordPage />;
}
