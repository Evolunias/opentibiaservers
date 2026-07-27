import WithActivePlayersStatusArgentinaKeywordPage, { generateMetadata } from './with-active-players-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersStatusArgentinaKeywordPage />;
}
