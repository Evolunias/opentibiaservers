import OfficialMiracleOnlineKeywordPage, { generateMetadata } from './official-miracle-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleOnlineKeywordPage />;
}
