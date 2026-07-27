import Tibiaretro100WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-10-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro100WithActivePlayersServerKeywordPage />;
}
