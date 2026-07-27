import Sabrehaven14WithActivePlayersServerKeywordPage, { generateMetadata } from './sabrehaven-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven14WithActivePlayersServerKeywordPage />;
}
