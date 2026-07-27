import NonPvpPlayersOnlineSwedenKeywordPage, { generateMetadata } from './non-pvp-players-online-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpPlayersOnlineSwedenKeywordPage />;
}
