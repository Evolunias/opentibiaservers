import PopularElderaOnlineKeywordPage, { generateMetadata } from './popular-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaOnlineKeywordPage />;
}
