import ReneraOnlineKeywordPage, { generateMetadata } from './renera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraOnlineKeywordPage />;
}
