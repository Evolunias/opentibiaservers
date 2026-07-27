import TibiaretroWithActivePlayersServerPolandKeywordPage, { generateMetadata } from './tibiaretro-with-active-players-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroWithActivePlayersServerPolandKeywordPage />;
}
