import Saintsot14WithActivePlayersServerKeywordPage, { generateMetadata } from './saintsot-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot14WithActivePlayersServerKeywordPage />;
}
