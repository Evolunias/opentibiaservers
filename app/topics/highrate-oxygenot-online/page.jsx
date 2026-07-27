import HighrateOxygenotOnlineKeywordPage, { generateMetadata } from './highrate-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotOnlineKeywordPage />;
}
