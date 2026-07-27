import Tibiaretro12WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12WithActivePlayersServerKeywordPage />;
}
