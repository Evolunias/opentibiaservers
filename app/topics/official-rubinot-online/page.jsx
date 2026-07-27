import OfficialRubinotOnlineKeywordPage, { generateMetadata } from './official-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotOnlineKeywordPage />;
}
