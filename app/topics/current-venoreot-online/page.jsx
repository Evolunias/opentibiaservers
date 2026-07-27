import CurrentVenoreotOnlineKeywordPage, { generateMetadata } from './current-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotOnlineKeywordPage />;
}
