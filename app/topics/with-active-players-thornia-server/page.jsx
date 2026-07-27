import WithActivePlayersThorniaServerKeywordPage, { generateMetadata } from './with-active-players-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersThorniaServerKeywordPage />;
}
