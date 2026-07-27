import TopAlasteraOnlineKeywordPage, { generateMetadata } from './top-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraOnlineKeywordPage />;
}
