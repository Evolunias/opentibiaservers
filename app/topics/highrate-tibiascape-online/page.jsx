import HighrateTibiascapeOnlineKeywordPage, { generateMetadata } from './highrate-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeOnlineKeywordPage />;
}
