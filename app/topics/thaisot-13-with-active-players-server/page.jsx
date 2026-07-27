import Thaisot13WithActivePlayersServerKeywordPage, { generateMetadata } from './thaisot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13WithActivePlayersServerKeywordPage />;
}
