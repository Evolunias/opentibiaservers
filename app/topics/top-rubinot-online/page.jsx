import TopRubinotOnlineKeywordPage, { generateMetadata } from './top-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotOnlineKeywordPage />;
}
