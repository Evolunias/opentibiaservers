import Blazera11WithActivePlayersServerKeywordPage, { generateMetadata } from './blazera-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11WithActivePlayersServerKeywordPage />;
}
