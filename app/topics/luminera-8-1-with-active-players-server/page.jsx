import Luminera81WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81WithActivePlayersServerKeywordPage />;
}
