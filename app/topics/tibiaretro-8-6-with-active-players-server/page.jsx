import Tibiaretro86WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86WithActivePlayersServerKeywordPage />;
}
