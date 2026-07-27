import Luminera74WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera74WithActivePlayersServerKeywordPage />;
}
