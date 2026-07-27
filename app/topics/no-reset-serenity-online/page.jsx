import NoResetSerenityOnlineKeywordPage, { generateMetadata } from './no-reset-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityOnlineKeywordPage />;
}
