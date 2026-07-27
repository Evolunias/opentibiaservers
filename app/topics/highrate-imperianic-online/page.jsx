import HighrateImperianicOnlineKeywordPage, { generateMetadata } from './highrate-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicOnlineKeywordPage />;
}
