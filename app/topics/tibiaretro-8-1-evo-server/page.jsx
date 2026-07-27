import Tibiaretro81EvoServerKeywordPage, { generateMetadata } from './tibiaretro-8-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro81EvoServerKeywordPage />;
}
