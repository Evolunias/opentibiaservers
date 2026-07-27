import Rubinot11WithActivePlayersServerKeywordPage, { generateMetadata } from './rubinot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11WithActivePlayersServerKeywordPage />;
}
