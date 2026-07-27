import NewEvoleraOnlineKeywordPage, { generateMetadata } from './new-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraOnlineKeywordPage />;
}
