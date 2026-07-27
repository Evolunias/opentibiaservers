import OfficialSerenityOnlineKeywordPage, { generateMetadata } from './official-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityOnlineKeywordPage />;
}
