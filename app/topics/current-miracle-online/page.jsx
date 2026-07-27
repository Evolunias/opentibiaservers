import CurrentMiracleOnlineKeywordPage, { generateMetadata } from './current-miracle-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleOnlineKeywordPage />;
}
