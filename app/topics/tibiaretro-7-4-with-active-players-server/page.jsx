import Tibiaretro74WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro74WithActivePlayersServerKeywordPage />;
}
