import BaiakServerOnlineKeywordPage, { generateMetadata } from './baiak-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerOnlineKeywordPage />;
}
