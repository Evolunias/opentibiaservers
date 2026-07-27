import WithActivePlayersServerListPolandKeywordPage, { generateMetadata } from './with-active-players-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListPolandKeywordPage />;
}
