import PopularMiracleOnlineKeywordPage, { generateMetadata } from './popular-miracle-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleOnlineKeywordPage />;
}
