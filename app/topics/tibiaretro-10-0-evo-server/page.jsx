import Tibiaretro100EvoServerKeywordPage, { generateMetadata } from './tibiaretro-10-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro100EvoServerKeywordPage />;
}
