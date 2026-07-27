import LowrateCanobOnlineKeywordPage, { generateMetadata } from './lowrate-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobOnlineKeywordPage />;
}
