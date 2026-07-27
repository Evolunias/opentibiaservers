import NoResetKasteriaOnlineKeywordPage, { generateMetadata } from './no-reset-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaOnlineKeywordPage />;
}
