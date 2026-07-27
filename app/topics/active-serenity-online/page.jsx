import ActiveSerenityOnlineKeywordPage, { generateMetadata } from './active-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityOnlineKeywordPage />;
}
