import HighrateArcaniarlOnlineKeywordPage, { generateMetadata } from './highrate-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlOnlineKeywordPage />;
}
