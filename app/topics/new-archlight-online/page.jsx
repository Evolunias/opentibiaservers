import NewArchlightOnlineKeywordPage, { generateMetadata } from './new-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightOnlineKeywordPage />;
}
