import Evolunia14WithActivePlayersServerKeywordPage, { generateMetadata } from './evolunia-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia14WithActivePlayersServerKeywordPage />;
}
