import OfficialArchlightOnlineKeywordPage, { generateMetadata } from './official-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightOnlineKeywordPage />;
}
