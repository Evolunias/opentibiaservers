import TopCanobOnlineKeywordPage, { generateMetadata } from './top-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobOnlineKeywordPage />;
}
