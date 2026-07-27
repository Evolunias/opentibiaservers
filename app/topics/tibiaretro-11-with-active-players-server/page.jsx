import Tibiaretro11WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11WithActivePlayersServerKeywordPage />;
}
