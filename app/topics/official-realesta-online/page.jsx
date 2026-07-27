import OfficialRealestaOnlineKeywordPage, { generateMetadata } from './official-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaOnlineKeywordPage />;
}
