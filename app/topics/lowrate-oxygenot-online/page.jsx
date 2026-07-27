import LowrateOxygenotOnlineKeywordPage, { generateMetadata } from './lowrate-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotOnlineKeywordPage />;
}
