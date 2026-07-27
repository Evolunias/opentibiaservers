import WithActivePlayersAlasteraServerKeywordPage, { generateMetadata } from './with-active-players-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersAlasteraServerKeywordPage />;
}
