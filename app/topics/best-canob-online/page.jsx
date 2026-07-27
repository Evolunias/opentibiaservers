import BestCanobOnlineKeywordPage, { generateMetadata } from './best-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobOnlineKeywordPage />;
}
