import NewBlazeraOnlineKeywordPage, { generateMetadata } from './new-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraOnlineKeywordPage />;
}
