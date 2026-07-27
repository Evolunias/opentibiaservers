import Luminera86WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86WithActivePlayersServerKeywordPage />;
}
