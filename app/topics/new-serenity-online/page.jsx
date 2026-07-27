import NewSerenityOnlineKeywordPage, { generateMetadata } from './new-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityOnlineKeywordPage />;
}
