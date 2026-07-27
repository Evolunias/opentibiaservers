import Unline13WithActivePlayersServerKeywordPage, { generateMetadata } from './unline-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13WithActivePlayersServerKeywordPage />;
}
