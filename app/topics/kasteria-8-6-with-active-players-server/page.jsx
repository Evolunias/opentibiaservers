import Kasteria86WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86WithActivePlayersServerKeywordPage />;
}
