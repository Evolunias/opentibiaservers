import Luminera11WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11WithActivePlayersServerKeywordPage />;
}
