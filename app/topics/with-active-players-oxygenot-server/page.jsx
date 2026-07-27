import WithActivePlayersOxygenotServerKeywordPage, { generateMetadata } from './with-active-players-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOxygenotServerKeywordPage />;
}
