import HighrateBlazeraOnlineKeywordPage, { generateMetadata } from './highrate-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraOnlineKeywordPage />;
}
