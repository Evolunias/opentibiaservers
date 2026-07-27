import Tibiaretro15WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15WithActivePlayersServerKeywordPage />;
}
