import Tibiaretro12EvoServerKeywordPage, { generateMetadata } from './tibiaretro-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12EvoServerKeywordPage />;
}
