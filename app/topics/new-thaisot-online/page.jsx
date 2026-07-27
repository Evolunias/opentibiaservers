import NewThaisotOnlineKeywordPage, { generateMetadata } from './new-thaisot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotOnlineKeywordPage />;
}
