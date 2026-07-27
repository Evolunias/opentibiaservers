import OfficialNilotOnlineKeywordPage, { generateMetadata } from './official-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotOnlineKeywordPage />;
}
