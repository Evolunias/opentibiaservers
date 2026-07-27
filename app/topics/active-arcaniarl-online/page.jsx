import ActiveArcaniarlOnlineKeywordPage, { generateMetadata } from './active-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlOnlineKeywordPage />;
}
