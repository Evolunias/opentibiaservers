import LowrateOlderaOnlineKeywordPage, { generateMetadata } from './lowrate-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaOnlineKeywordPage />;
}
