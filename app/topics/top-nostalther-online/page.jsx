import TopNostaltherOnlineKeywordPage, { generateMetadata } from './top-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherOnlineKeywordPage />;
}
