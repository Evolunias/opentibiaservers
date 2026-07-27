import OfficialNostaltherOnlineKeywordPage, { generateMetadata } from './official-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherOnlineKeywordPage />;
}
