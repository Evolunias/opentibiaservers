import Tibiaretro15EvoServerKeywordPage, { generateMetadata } from './tibiaretro-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15EvoServerKeywordPage />;
}
