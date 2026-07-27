import WithActivePlayersServerListLatinAmericaKeywordPage, { generateMetadata } from './with-active-players-server-list-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListLatinAmericaKeywordPage />;
}
