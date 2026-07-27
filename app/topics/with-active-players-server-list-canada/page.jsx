import WithActivePlayersServerListCanadaKeywordPage, { generateMetadata } from './with-active-players-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListCanadaKeywordPage />;
}
