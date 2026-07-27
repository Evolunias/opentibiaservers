import OfficialTibiaraOnlineKeywordPage, { generateMetadata } from './official-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraOnlineKeywordPage />;
}
