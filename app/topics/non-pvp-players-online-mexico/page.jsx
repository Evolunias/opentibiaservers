import NonPvpPlayersOnlineMexicoKeywordPage, { generateMetadata } from './non-pvp-players-online-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpPlayersOnlineMexicoKeywordPage />;
}
