import HighrateRubinotOnlineKeywordPage, { generateMetadata } from './highrate-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotOnlineKeywordPage />;
}
