import PopularTibiameOnlineKeywordPage, { generateMetadata } from './popular-tibiame-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameOnlineKeywordPage />;
}
