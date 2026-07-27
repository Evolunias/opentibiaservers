import Sabrehaven11WithActivePlayersServerKeywordPage, { generateMetadata } from './sabrehaven-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven11WithActivePlayersServerKeywordPage />;
}
