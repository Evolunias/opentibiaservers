import Thornia74WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia74WithActivePlayersServerKeywordPage />;
}
