import Rubinot12WithActivePlayersServerKeywordPage, { generateMetadata } from './rubinot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12WithActivePlayersServerKeywordPage />;
}
