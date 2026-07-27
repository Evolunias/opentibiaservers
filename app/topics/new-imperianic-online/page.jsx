import NewImperianicOnlineKeywordPage, { generateMetadata } from './new-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicOnlineKeywordPage />;
}
