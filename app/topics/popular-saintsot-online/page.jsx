import PopularSaintsotOnlineKeywordPage, { generateMetadata } from './popular-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotOnlineKeywordPage />;
}
