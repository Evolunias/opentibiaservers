import WithActivePlayersServerListNorthAmericaKeywordPage, { generateMetadata } from './with-active-players-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListNorthAmericaKeywordPage />;
}
