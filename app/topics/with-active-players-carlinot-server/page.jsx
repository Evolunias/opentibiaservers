import WithActivePlayersCarlinotServerKeywordPage, { generateMetadata } from './with-active-players-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersCarlinotServerKeywordPage />;
}
