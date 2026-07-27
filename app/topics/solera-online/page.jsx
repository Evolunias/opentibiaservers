import SoleraOnlineKeywordPage, { generateMetadata } from './solera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraOnlineKeywordPage />;
}
