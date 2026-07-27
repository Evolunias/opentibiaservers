import WithActivePlayersServerListUsaKeywordPage, { generateMetadata } from './with-active-players-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListUsaKeywordPage />;
}
