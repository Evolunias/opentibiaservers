import Luminera80WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80WithActivePlayersServerKeywordPage />;
}
