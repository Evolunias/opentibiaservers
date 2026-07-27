import NonPvpPlayersOnlineNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-players-online-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpPlayersOnlineNorthAmericaKeywordPage />;
}
