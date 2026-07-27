import Tibiaretro13EvoServerKeywordPage, { generateMetadata } from './tibiaretro-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13EvoServerKeywordPage />;
}
