import SerenityOnlineKeywordPage, { generateMetadata } from './serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityOnlineKeywordPage />;
}
