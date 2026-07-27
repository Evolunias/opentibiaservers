import NonPvpPlayersOnlineUsaKeywordPage, { generateMetadata } from './non-pvp-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpPlayersOnlineUsaKeywordPage />;
}
