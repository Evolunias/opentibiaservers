import WithActivePlayersMarolaotServerKeywordPage, { generateMetadata } from './with-active-players-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersMarolaotServerKeywordPage />;
}
