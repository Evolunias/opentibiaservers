import CurrentNilotOnlineKeywordPage, { generateMetadata } from './current-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotOnlineKeywordPage />;
}
