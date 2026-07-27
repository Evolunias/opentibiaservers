import Tibiaretro14EvoServerKeywordPage, { generateMetadata } from './tibiaretro-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro14EvoServerKeywordPage />;
}
