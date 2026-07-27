import Tibiaretro13WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13WithActivePlayersServerKeywordPage />;
}
