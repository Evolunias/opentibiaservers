import ArchlightOnlineKeywordPage, { generateMetadata } from './archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightOnlineKeywordPage />;
}
