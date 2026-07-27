import Miracle13WithActivePlayersServerKeywordPage, { generateMetadata } from './miracle-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13WithActivePlayersServerKeywordPage />;
}
