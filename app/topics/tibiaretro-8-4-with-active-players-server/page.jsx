import Tibiaretro84WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-8-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro84WithActivePlayersServerKeywordPage />;
}
