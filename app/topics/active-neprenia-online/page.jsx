import ActiveNepreniaOnlineKeywordPage, { generateMetadata } from './active-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaOnlineKeywordPage />;
}
