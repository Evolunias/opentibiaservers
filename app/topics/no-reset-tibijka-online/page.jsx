import NoResetTibijkaOnlineKeywordPage, { generateMetadata } from './no-reset-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaOnlineKeywordPage />;
}
