import TopArcaniarlOnlineKeywordPage, { generateMetadata } from './top-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlOnlineKeywordPage />;
}
