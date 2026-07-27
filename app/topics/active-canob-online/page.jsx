import ActiveCanobOnlineKeywordPage, { generateMetadata } from './active-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobOnlineKeywordPage />;
}
