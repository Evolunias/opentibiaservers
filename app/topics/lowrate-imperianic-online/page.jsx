import LowrateImperianicOnlineKeywordPage, { generateMetadata } from './lowrate-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicOnlineKeywordPage />;
}
