import CurrentNepreniaOnlineKeywordPage, { generateMetadata } from './current-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaOnlineKeywordPage />;
}
