import WithActivePlayersRubinotServerKeywordPage, { generateMetadata } from './with-active-players-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersRubinotServerKeywordPage />;
}
