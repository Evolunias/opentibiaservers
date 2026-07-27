import TopTibijkaOnlineKeywordPage, { generateMetadata } from './top-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaOnlineKeywordPage />;
}
