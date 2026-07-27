import Luminera71WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71WithActivePlayersServerKeywordPage />;
}
