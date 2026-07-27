import TopOxygenotOnlineKeywordPage, { generateMetadata } from './top-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotOnlineKeywordPage />;
}
