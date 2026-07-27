import Rubinot13WithActivePlayersServerKeywordPage, { generateMetadata } from './rubinot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13WithActivePlayersServerKeywordPage />;
}
