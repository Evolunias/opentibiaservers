import CurrentOlderaOnlineKeywordPage, { generateMetadata } from './current-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaOnlineKeywordPage />;
}
