import PopularOlderaOnlineKeywordPage, { generateMetadata } from './popular-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaOnlineKeywordPage />;
}
