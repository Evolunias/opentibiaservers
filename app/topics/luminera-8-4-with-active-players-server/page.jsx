import Luminera84WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-8-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84WithActivePlayersServerKeywordPage />;
}
