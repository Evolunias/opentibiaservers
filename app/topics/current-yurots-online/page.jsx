import CurrentYurotsOnlineKeywordPage, { generateMetadata } from './current-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsOnlineKeywordPage />;
}
