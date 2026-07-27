import NewAlasteraOnlineKeywordPage, { generateMetadata } from './new-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraOnlineKeywordPage />;
}
