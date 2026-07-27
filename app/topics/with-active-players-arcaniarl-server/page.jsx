import WithActivePlayersArcaniarlServerKeywordPage, { generateMetadata } from './with-active-players-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersArcaniarlServerKeywordPage />;
}
