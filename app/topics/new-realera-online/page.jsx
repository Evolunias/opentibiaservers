import NewRealeraOnlineKeywordPage, { generateMetadata } from './new-realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraOnlineKeywordPage />;
}
