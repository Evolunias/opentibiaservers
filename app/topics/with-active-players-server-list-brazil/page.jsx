import WithActivePlayersServerListBrazilKeywordPage, { generateMetadata } from './with-active-players-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListBrazilKeywordPage />;
}
