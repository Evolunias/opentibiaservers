import CurrentSerenityOnlineKeywordPage, { generateMetadata } from './current-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityOnlineKeywordPage />;
}
