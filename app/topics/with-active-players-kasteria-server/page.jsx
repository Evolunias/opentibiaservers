import WithActivePlayersKasteriaServerKeywordPage, { generateMetadata } from './with-active-players-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersKasteriaServerKeywordPage />;
}
