import TibiaraOnlineKeywordPage, { generateMetadata } from './tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraOnlineKeywordPage />;
}
