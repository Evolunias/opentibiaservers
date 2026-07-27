import Blazera14WithActivePlayersServerKeywordPage, { generateMetadata } from './blazera-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14WithActivePlayersServerKeywordPage />;
}
