import CurrentNostaltherOnlineKeywordPage, { generateMetadata } from './current-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherOnlineKeywordPage />;
}
