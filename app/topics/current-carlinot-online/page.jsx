import CurrentCarlinotOnlineKeywordPage, { generateMetadata } from './current-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotOnlineKeywordPage />;
}
