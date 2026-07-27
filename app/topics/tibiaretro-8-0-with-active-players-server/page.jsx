import Tibiaretro80WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80WithActivePlayersServerKeywordPage />;
}
