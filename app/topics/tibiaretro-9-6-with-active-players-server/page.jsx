import Tibiaretro96WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro96WithActivePlayersServerKeywordPage />;
}
