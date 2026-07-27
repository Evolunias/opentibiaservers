import TopDuraOnlineKeywordPage, { generateMetadata } from './top-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDuraOnlineKeywordPage />;
}
