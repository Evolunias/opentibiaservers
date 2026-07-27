import CurrentRealeraOnlineKeywordPage, { generateMetadata } from './current-realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraOnlineKeywordPage />;
}
