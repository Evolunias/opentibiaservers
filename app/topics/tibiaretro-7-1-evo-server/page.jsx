import Tibiaretro71EvoServerKeywordPage, { generateMetadata } from './tibiaretro-7-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro71EvoServerKeywordPage />;
}
