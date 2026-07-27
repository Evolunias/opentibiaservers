import PopularTibiantisOnlineKeywordPage, { generateMetadata } from './popular-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisOnlineKeywordPage />;
}
