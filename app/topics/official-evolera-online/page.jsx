import OfficialEvoleraOnlineKeywordPage, { generateMetadata } from './official-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraOnlineKeywordPage />;
}
