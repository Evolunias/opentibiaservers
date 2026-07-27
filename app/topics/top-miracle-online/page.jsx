import TopMiracleOnlineKeywordPage, { generateMetadata } from './top-miracle-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleOnlineKeywordPage />;
}
