import Imperianic13WithActivePlayersServerKeywordPage, { generateMetadata } from './imperianic-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic13WithActivePlayersServerKeywordPage />;
}
