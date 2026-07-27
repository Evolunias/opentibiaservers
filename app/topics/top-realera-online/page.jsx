import TopRealeraOnlineKeywordPage, { generateMetadata } from './top-realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraOnlineKeywordPage />;
}
