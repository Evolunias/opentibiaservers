import NoResetArcaniarlOnlineKeywordPage, { generateMetadata } from './no-reset-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlOnlineKeywordPage />;
}
