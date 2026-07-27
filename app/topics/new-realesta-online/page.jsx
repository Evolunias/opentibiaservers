import NewRealestaOnlineKeywordPage, { generateMetadata } from './new-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaOnlineKeywordPage />;
}
