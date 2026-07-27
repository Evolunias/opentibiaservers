import LowrateArcaniarlOnlineKeywordPage, { generateMetadata } from './lowrate-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlOnlineKeywordPage />;
}
