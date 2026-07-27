import OfficialOlderaOnlineKeywordPage, { generateMetadata } from './official-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaOnlineKeywordPage />;
}
