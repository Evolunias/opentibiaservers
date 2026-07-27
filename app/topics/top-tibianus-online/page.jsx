import TopTibianusOnlineKeywordPage, { generateMetadata } from './top-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusOnlineKeywordPage />;
}
