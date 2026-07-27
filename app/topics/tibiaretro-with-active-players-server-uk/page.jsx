import TibiaretroWithActivePlayersServerUkKeywordPage, { generateMetadata } from './tibiaretro-with-active-players-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroWithActivePlayersServerUkKeywordPage />;
}
