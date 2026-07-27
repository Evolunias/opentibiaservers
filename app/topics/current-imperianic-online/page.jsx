import CurrentImperianicOnlineKeywordPage, { generateMetadata } from './current-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicOnlineKeywordPage />;
}
