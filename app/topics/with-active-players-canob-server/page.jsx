import WithActivePlayersCanobServerKeywordPage, { generateMetadata } from './with-active-players-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersCanobServerKeywordPage />;
}
