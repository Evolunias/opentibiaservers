import TopNepreniaOnlineKeywordPage, { generateMetadata } from './top-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaOnlineKeywordPage />;
}
