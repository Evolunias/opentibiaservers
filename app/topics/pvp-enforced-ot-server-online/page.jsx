import PvpEnforcedOtServerOnlineKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerOnlineKeywordPage />;
}
