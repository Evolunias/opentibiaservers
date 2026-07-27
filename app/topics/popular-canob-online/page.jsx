import PopularCanobOnlineKeywordPage, { generateMetadata } from './popular-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobOnlineKeywordPage />;
}
