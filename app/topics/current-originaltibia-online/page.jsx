import CurrentOriginaltibiaOnlineKeywordPage, { generateMetadata } from './current-originaltibia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaOnlineKeywordPage />;
}
