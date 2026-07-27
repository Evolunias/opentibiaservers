import OfficialRealeraOnlineKeywordPage, { generateMetadata } from './official-realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraOnlineKeywordPage />;
}
