import LowrateTibiascapeOnlineKeywordPage, { generateMetadata } from './lowrate-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeOnlineKeywordPage />;
}
