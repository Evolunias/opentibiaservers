import OfficialOxygenotOnlineKeywordPage, { generateMetadata } from './official-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotOnlineKeywordPage />;
}
