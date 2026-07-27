import HighrateCanobOnlineKeywordPage, { generateMetadata } from './highrate-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobOnlineKeywordPage />;
}
