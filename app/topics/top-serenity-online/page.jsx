import TopSerenityOnlineKeywordPage, { generateMetadata } from './top-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityOnlineKeywordPage />;
}
