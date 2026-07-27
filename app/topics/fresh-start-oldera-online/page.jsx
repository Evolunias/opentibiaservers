import FreshStartOlderaOnlineKeywordPage, { generateMetadata } from './fresh-start-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaOnlineKeywordPage />;
}
