import TopBlazeraOnlineKeywordPage, { generateMetadata } from './top-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraOnlineKeywordPage />;
}
