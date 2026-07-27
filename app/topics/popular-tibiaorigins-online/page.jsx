import PopularTibiaoriginsOnlineKeywordPage, { generateMetadata } from './popular-tibiaorigins-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsOnlineKeywordPage />;
}
