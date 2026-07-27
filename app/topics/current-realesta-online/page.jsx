import CurrentRealestaOnlineKeywordPage, { generateMetadata } from './current-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaOnlineKeywordPage />;
}
