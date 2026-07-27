import NoResetCanobOnlineKeywordPage, { generateMetadata } from './no-reset-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobOnlineKeywordPage />;
}
