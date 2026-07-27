import PopularOxygenotOnlineKeywordPage, { generateMetadata } from './popular-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotOnlineKeywordPage />;
}
