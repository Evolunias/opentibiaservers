import Tibiaretro12RetroServerKeywordPage, { generateMetadata } from './tibiaretro-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12RetroServerKeywordPage />;
}
