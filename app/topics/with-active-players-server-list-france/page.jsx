import WithActivePlayersServerListFranceKeywordPage, { generateMetadata } from './with-active-players-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListFranceKeywordPage />;
}
