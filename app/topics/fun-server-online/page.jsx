import FunServerOnlineKeywordPage, { generateMetadata } from './fun-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerOnlineKeywordPage />;
}
