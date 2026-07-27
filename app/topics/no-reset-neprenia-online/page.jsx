import NoResetNepreniaOnlineKeywordPage, { generateMetadata } from './no-reset-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaOnlineKeywordPage />;
}
