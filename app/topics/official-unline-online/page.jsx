import OfficialUnlineOnlineKeywordPage, { generateMetadata } from './official-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineOnlineKeywordPage />;
}
