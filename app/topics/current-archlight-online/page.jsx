import CurrentArchlightOnlineKeywordPage, { generateMetadata } from './current-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightOnlineKeywordPage />;
}
