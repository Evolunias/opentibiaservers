import ActiveTibiascapeOnlineKeywordPage, { generateMetadata } from './active-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeOnlineKeywordPage />;
}
