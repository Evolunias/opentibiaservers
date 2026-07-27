import CurrentTibiaraOnlineKeywordPage, { generateMetadata } from './current-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraOnlineKeywordPage />;
}
