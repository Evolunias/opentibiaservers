import Thornia86WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86WithActivePlayersServerKeywordPage />;
}
