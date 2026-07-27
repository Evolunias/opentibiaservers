import CurrentTibiascapeOnlineKeywordPage, { generateMetadata } from './current-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeOnlineKeywordPage />;
}
