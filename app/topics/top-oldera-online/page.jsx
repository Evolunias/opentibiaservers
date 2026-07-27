import TopOlderaOnlineKeywordPage, { generateMetadata } from './top-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaOnlineKeywordPage />;
}
