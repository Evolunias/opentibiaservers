import TopRealestaOnlineKeywordPage, { generateMetadata } from './top-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaOnlineKeywordPage />;
}
