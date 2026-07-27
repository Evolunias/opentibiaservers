import NewElderaOnlineKeywordPage, { generateMetadata } from './new-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaOnlineKeywordPage />;
}
