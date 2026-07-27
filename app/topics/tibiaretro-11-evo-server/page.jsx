import Tibiaretro11EvoServerKeywordPage, { generateMetadata } from './tibiaretro-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11EvoServerKeywordPage />;
}
