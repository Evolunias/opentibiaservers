import Tibiaretro86EvoServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86EvoServerKeywordPage />;
}
