import Venoreot13WithActivePlayersServerKeywordPage, { generateMetadata } from './venoreot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13WithActivePlayersServerKeywordPage />;
}
