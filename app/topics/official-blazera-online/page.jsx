import OfficialBlazeraOnlineKeywordPage, { generateMetadata } from './official-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraOnlineKeywordPage />;
}
