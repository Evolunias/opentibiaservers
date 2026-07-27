import OriginaltibiaOnlineKeywordPage, { generateMetadata } from './originaltibia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaOnlineKeywordPage />;
}
