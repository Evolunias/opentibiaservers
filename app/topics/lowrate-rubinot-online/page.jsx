import LowrateRubinotOnlineKeywordPage, { generateMetadata } from './lowrate-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotOnlineKeywordPage />;
}
