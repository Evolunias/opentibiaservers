import Tibijka11WithActivePlayersServerKeywordPage, { generateMetadata } from './tibijka-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11WithActivePlayersServerKeywordPage />;
}
