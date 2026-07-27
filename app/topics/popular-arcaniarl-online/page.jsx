import PopularArcaniarlOnlineKeywordPage, { generateMetadata } from './popular-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlOnlineKeywordPage />;
}
