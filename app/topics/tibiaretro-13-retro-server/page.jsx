import Tibiaretro13RetroServerKeywordPage, { generateMetadata } from './tibiaretro-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13RetroServerKeywordPage />;
}
