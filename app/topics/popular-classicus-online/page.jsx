import PopularClassicusOnlineKeywordPage, { generateMetadata } from './popular-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusOnlineKeywordPage />;
}
