import TopElderaOnlineKeywordPage, { generateMetadata } from './top-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaOnlineKeywordPage />;
}
