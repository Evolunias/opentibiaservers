import KasteriaWithActivePlayersServerPolandKeywordPage, { generateMetadata } from './kasteria-with-active-players-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaWithActivePlayersServerPolandKeywordPage />;
}
