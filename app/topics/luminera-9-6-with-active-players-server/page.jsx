import Luminera96WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96WithActivePlayersServerKeywordPage />;
}
