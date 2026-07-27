import WithActivePlayersClientArgentinaKeywordPage, { generateMetadata } from './with-active-players-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientArgentinaKeywordPage />;
}
