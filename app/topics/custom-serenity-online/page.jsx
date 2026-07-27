import CustomSerenityOnlineKeywordPage, { generateMetadata } from './custom-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityOnlineKeywordPage />;
}
