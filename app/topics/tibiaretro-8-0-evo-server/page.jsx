import Tibiaretro80EvoServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80EvoServerKeywordPage />;
}
