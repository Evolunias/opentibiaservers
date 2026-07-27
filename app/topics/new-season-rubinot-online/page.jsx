import NewSeasonRubinotOnlineKeywordPage, { generateMetadata } from './new-season-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotOnlineKeywordPage />;
}
