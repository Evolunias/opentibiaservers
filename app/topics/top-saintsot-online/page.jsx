import TopSaintsotOnlineKeywordPage, { generateMetadata } from './top-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotOnlineKeywordPage />;
}
