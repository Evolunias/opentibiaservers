import OfficialElderaOnlineKeywordPage, { generateMetadata } from './official-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaOnlineKeywordPage />;
}
