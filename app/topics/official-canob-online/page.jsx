import OfficialCanobOnlineKeywordPage, { generateMetadata } from './official-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobOnlineKeywordPage />;
}
