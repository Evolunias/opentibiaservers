import LowrateBlazeraOnlineKeywordPage, { generateMetadata } from './lowrate-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraOnlineKeywordPage />;
}
