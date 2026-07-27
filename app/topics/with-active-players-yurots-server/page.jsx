import WithActivePlayersYurotsServerKeywordPage, { generateMetadata } from './with-active-players-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersYurotsServerKeywordPage />;
}
