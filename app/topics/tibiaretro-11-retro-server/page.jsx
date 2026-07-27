import Tibiaretro11RetroServerKeywordPage, { generateMetadata } from './tibiaretro-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11RetroServerKeywordPage />;
}
