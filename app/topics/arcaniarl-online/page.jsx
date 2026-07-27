import ArcaniarlOnlineKeywordPage, { generateMetadata } from './arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlOnlineKeywordPage />;
}
