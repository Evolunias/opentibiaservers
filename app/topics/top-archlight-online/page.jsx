import TopArchlightOnlineKeywordPage, { generateMetadata } from './top-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightOnlineKeywordPage />;
}
