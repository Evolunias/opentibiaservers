import HighrateSerenityOnlineKeywordPage, { generateMetadata } from './highrate-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityOnlineKeywordPage />;
}
