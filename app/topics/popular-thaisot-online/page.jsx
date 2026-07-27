import PopularThaisotOnlineKeywordPage, { generateMetadata } from './popular-thaisot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotOnlineKeywordPage />;
}
