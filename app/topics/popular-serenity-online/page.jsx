import PopularSerenityOnlineKeywordPage, { generateMetadata } from './popular-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityOnlineKeywordPage />;
}
