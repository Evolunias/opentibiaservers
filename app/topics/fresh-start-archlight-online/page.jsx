import FreshStartArchlightOnlineKeywordPage, { generateMetadata } from './fresh-start-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightOnlineKeywordPage />;
}
