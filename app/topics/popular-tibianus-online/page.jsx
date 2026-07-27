import PopularTibianusOnlineKeywordPage, { generateMetadata } from './popular-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusOnlineKeywordPage />;
}
