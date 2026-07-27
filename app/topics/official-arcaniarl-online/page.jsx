import OfficialArcaniarlOnlineKeywordPage, { generateMetadata } from './official-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlOnlineKeywordPage />;
}
