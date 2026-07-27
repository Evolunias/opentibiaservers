import PopularThorniaOnlineKeywordPage, { generateMetadata } from './popular-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaOnlineKeywordPage />;
}
