import TopThaisotOnlineKeywordPage, { generateMetadata } from './top-thaisot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotOnlineKeywordPage />;
}
