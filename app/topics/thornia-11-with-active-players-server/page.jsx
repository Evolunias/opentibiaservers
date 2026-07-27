import Thornia11WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11WithActivePlayersServerKeywordPage />;
}
